import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Spin,
} from "antd";

import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import addIcon from "../../../../assets/addIcon.svg";
import InputCustom from "../../../../components/admin/InputCustom";
import axios from "axios";
import { create, read, update } from "../../../../api/products";
import { useNavigate, useParams } from "react-router-dom";
import Upload, { RcFile, UploadProps } from "antd/lib/upload";
type Props = {};

const FormProduct = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [caterory, setCategory] = useState([]);
  const [product, setProduct] = useState<any>({});
  const handleChangeImage = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2097152) {
        return message.error("File không vượt quá 2MB");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          return uploadImage(reader.result as string);
        };
      }
    }
  };
  const onFinish = (value: any) => {
    if (!imageUrl) return message.error("Ảnh không được trống");
    Modal.confirm({
      content: "Bạn có chắc muốn thêm",
      onOk: async () => {
        if (id) {
          if ((!imageUrl && loading) || loading) {
            message.error("Please await images !!");
          } else {
            await update({ ...value, images: imageUrl, id: product.id });
            message.success("Cập nhật thành công");

            navigate("/admin/products");
          }
        } else {
          if (imageUrl && !loading) {
            await create({ ...value, images: imageUrl });
            message.success("Thêm thành công");

            navigate("/admin/products");
          } else {
            message.error("Please await images !!");
          }
        }
      },
    });
  };
  const uploadImage = async (base64Image: string) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://image-uploader-anhhtus.herokuapp.com/api/upload",
        { data: base64Image }
      );
      setLoading(false);
      setImageUrl(data.url);
    } catch (err: any) {
      message.error(JSON.stringify(err.message));
    }
  };
  useEffect(() => {
    const fetchCate = async () => {
      const { data } = await axios.get("http://localhost:3001/category");
      setCategory(data);
    };
    fetchCate();
    if (id) {
      const fetchProduct = async () => {
        const { data } = await read(id);
        setProduct(data);
        form.setFieldsValue(data);
      };
      fetchProduct();
    }
  }, []);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>Điện thoại</div>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.upload}>
              <Form.Item name="images">
                <label className={styles.upload_btn}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleChangeImage}
                    accept="image/jpg,image/png,image/jpg"
                    defaultValue={imageUrl}
                  />
                  {product.images || imageUrl || loading ? (
                    <img
                      src={imageUrl || product.images}
                      alt=""
                      className={styles.img_prev}
                    />
                  ) : (
                    <>
                      <img src={addIcon} alt="" />
                      <span>Thêm ảnh</span>
                    </>
                  )}
                  {loading && <Spin size="large" />}
                </label>
              </Form.Item>
              {/* <Form.Item
                name="images"
                rules={[
                  {
                    required: true,
                    message: "Trường ảnh không được trống",
                  },
                ]}
              >
                <input type="text" defaultValue={imageUrl} />
              </Form.Item> */}
            </div>
            <Form.Item
              name="description"
              label="Mô tả"
              rules={[
                { required: true, message: "Trường này không được để trống!" },
              ]}
            >
              <Input.TextArea rows={5} />
            </Form.Item>
          </div>
          <div className={styles.right}>
            <div className={styles.info}>Thông tin sản phẩm</div>
            <hr />

            <div className={styles.main_form}>
              <Form.Item
                name="name"
                label="Tên sản phẩm"
                rules={[
                  {
                    required: true,
                    message: "Trường này không được để trống!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <div className={styles.flex}>
                <Form.Item
                  name="originalPrice"
                  label="Giá gốc"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống!",
                    },
                  ]}
                  className={styles.w50}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá khuyến mãi"
                  dependencies={["originalPrice"]}
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        const price = getFieldValue("originalPrice");
                        return price && value < price
                          ? Promise.resolve()
                          : Promise.reject("Giá sale phải nhỏ hơn giá gốc!");
                      },
                    }),
                  ]}
                  className={styles.w50}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
              </div>
              <Form.Item
                name="cateID"
                rules={[
                  { required: true, message: "Trường này không được để trống" },
                ]}
              >
                <Select style={{ width: 120 }}>
                  {caterory.map((item: any) => (
                    <Select.Option value={item.id} key={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="feature"
                label="Tính năng"
                rules={[
                  {
                    required: true,
                    message: "Trường này không được để trống!",
                  },
                ]}
              >
                <Input.TextArea rows={8} />
              </Form.Item>
              <div>
                <Button type="primary" htmlType="submit">
                  {id ? "Cập nhât" : "Thêm mới"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default FormProduct;

// const getBase64 = (img: RcFile, callback: (url: string) => void) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result as string));
//   reader.readAsDataURL(img);
// };
// const beforeUpload = (file: RcFile) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

// const FormProduct = (props: Props) => {
//   // const [loading, setLoading] = useState(false);
//   // const [imageUrl, setImageUrl] = useState<string>();
//   // const handleChange: UploadProps["onChange"] = (
//   //   info: UploadChangeParam<UploadFile>
//   // ) => {
//   //   if (info.file.status === "uploading") {
//   //     setLoading(true);
//   //     return;
//   //   }
//   //   if (info.file.status === "done") {
//   //     // Get this url from response in real world.
//   //     getBase64(info.file.originFileObj as RcFile, (url) => {
//   //       setLoading(false);
//   //       setImageUrl(url);
//   //     });
//   //   }
//   // };
//   // const uploadButton = (
//   //   <div>
//   //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
//   //     <div style={{ marginTop: 8 }}>Upload</div>
//   //   </div>
//   // );
//   return (
//     <div>
//       <div className={styles.header}>
//         <div className={styles.title}>Điện thoại</div>
//       </div>
//       <form action="">
//         <div className={styles.content}>
//           <div className={styles.left}>
//             {/* <Upload
//               name="avatar"
//               listType="picture-card"
//               className={styles.avatar_uploader}
//               // className="avatar-uploader"
//               showUploadList={false}
//               action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//               beforeUpload={beforeUpload}
//               onChange={handleChange}
//             >
//               {imageUrl ? (
//                 <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
//               ) : (
//                 uploadButton
//               )}
//             </Upload> */}
//             <div className={styles.upload}>
//               <label className={styles.upload_btn}>
//                 <img src={addIcon} alt="" />
//                 <span>Thêm ảnh</span>
//                 <input type="file" style={{ display: "none" }} />
//               </label>
//             </div>
//             <div className={styles.input_field}>
//               <label>
//                 Mô tả ngắn:
//                 <TextArea
//                   id="sub_description"
//                   rows={4}
//                   placeholder="maxLength is 6"
//                   maxLength={6}
//                 />
//               </label>
//             </div>
//           </div>
//           <div className={styles.right}>
//             <div className={styles.info}>Thông tin sản phẩm</div>
//             <hr />
//             <div className={styles.main_form}>
//               <InputCustom lable="Tên sản phẩm"/>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormProduct;
