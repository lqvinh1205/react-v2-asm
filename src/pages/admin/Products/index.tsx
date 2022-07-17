import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import addIcon from "../../../assets/addIcon.svg";
import { Select, Switch, Table } from "antd";
import { get } from "../../../api/products";
type Props = {};
const { Option } = Select;

const Products = (props: Props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await get();
      setProducts(data);
      setIsloading(false);
    };
    fetchData();
  }, []);

  const onGenderChange = (e: any) => {
    console.log(e);
  };
  const checked = (e: boolean) => {
    console.log(e);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      width: "5%",
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
		width: "30%",

    },
	{
		title: "Ẩn/hiện",
		dataIndex: "name",
		key: "name",
		width: "10%",
		render: () => <Switch onChange={checked} />,
	  },
    {
      title: "Action",
		width: "15%",

      render: () => <span>Delete</span>,
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
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </div>
      </div>
      <div className={styles.table_products}>
        <Table columns={columns} dataSource={products} loading={isLoading}/>
      </div>
    </div>
  );
};

export default Products;
