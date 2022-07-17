import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Upload } from "antd";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/lib/upload";
import React, { useState } from "react";
import styles from "./Form.module.css";
import addIcon from "../../../../assets/addIcon.svg";
import TextArea from "antd/lib/input/TextArea";
import InputCustom from "../../../../components/admin/InputCustom";
type Props = {};

const FormProduct = (props: Props) => {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success("Submit success!");
  };
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
            {/* <Upload
              name="avatar"
              listType="picture-card"
              className={styles.avatar_uploader}
              // className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload> */}
            <div className={styles.upload}>
              <label className={styles.upload_btn}>
                <img src={addIcon} alt="" />
                <span>Thêm ảnh</span>
                <input type="file" style={{ display: "none" }} />
              </label>
            </div>
            {/* <div className={styles.input_field}>
              <label>
                Mô tả ngắn:
                <TextArea
                  id="sub_description"
                  rows={4}
                  placeholder="maxLength is 6"
                  maxLength={6}
                />
              </label>
            </div> */}
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
                  <Input />
                </Form.Item>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá khuyến mãi"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống!",
                    },
                  ]}
                  className={styles.w50}
                >
                  <Input />
                </Form.Item>
              </div>
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
                  Thêm mới
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
