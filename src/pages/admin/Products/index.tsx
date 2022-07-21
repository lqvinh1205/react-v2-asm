import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import addIcon from "../../../assets/addIcon.svg";
import { message, Modal, Select, Switch, Table } from "antd";
import { changeStatus, get } from "../../../api/products";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

type Props = {};
const { Option } = Select;

const Products = (props: Props) => {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const fetchData = async () => {
    const { data } = await get();
    setProducts(data);
    setProductsFilter(data);
    setIsloading(false);
  };
  useEffect(() => {
    const fetchCate = async () => {
      const { data } = await axios.get("http://localhost:3001/category");
      setCategory(data);
    };
    fetchData();
    fetchCate();
  }, []);

  const onGenderChange = (cateID: any) => {
    if (cateID) {
      const data = products.filter((item: any) => item.cateID === cateID);
      setProductsFilter(data);
    } else {
      setProductsFilter(products);
    }
  };
  const checked = async (record: any) => {
    await changeStatus(record);
    message.success("Thay đổi trạng thái thành công!")
    fetchData();
  };
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      width: "5%",
      key: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Thành tiền",
      key: "saleOffPrice",
      dataIndex: "saleOffPrice",
      width: "10%",

      //   render: (_, { tags }) => (
      // 	<>
      // 	  {tags.map(tag => {
      // 		let color = tag.length > 5 ? 'geekblue' : 'green';
      // 		if (tag === 'loser') {
      // 		  color = 'volcano';
      // 		}
      // 		return (
      // 		  <Tag color={color} key={tag}>
      // 			{tag.toUpperCase()}
      // 		  </Tag>
      // 		);
      // 	  })}
      // 	</>
      //   ),
    },

    {
      title: "Feature",
      key: "feature",
      dataIndex: "feature",
      width: "40%",
    },
    {
      title: "Ẩn/hiện",
      dataIndex: "status",
      width: "10%",
      render: (_: boolean, record: any) => (
        <Switch checked={_} onChange={() => checked(record)} />
      ),
    },
    {
      title: "Action",
      width: "5%",
      dataIndex: "id",
      key: "id",

      render: (id: any) => (
        <div className={styles.group_btn}>
          <Link to={`${id}/edit`}>
            <button className={styles.btn_edit}>
              <AiOutlineEdit />
            </button>
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>Điện thoại</div>
        <div className={styles.btn_add}>
          <Link to="add">
            <img src={addIcon} alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.filter_name}>Bộ lọc</div>
        <div className={styles.filter_main}>
          <span>Danh mục sản phẩm</span>
          <Select
            placeholder="Choose"
            onChange={onGenderChange}
            allowClear
            className={styles.filter_select}
          >
            <Option value="">Tất cả</Option>
            {category.map((item: any) => (
              <Option value={item.id} key={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.table_products}>
        <Table
          columns={columns}
          dataSource={productsFilter}
          loading={isLoading}
          rowKey="id"
        />
      </div>
    </div>
  );
};

export default Products;
