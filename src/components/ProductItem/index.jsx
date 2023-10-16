/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import Counter from "../Counter";
import placeholderImage from "../../assets/place_holder.jpg";
import { InputNumber } from "antd";
import { Link } from "react-router-dom";
import styles from "./productItem.module.css";
export default function ProductItem({
  name,
  imageUrl,
  price,
  description,
  count,
  countHandler,
  editHandler,
  userRole,
}) {
  return (
    <>
      <Link
        to={{
          pathname: `/product/${name}`,
          state: {
            product: {
              name,
              imageUrl,
              price,
              description,
              count,
              countHandler,
              editHandler,
              userRole,
            },
          },
        }}
      >
        <img
          src={placeholderImage}
          alt="Placeholder"
          width={300}
          height={200}
        />
      </Link>
      <br />
      {name}
      <br />${price}
      <br />
      {description}
      <br />
      {count === 0 ? (
        <button onClick={() => countHandler(1)}>Add</button>
      ) : (
        <InputNumber
          addonBefore={<p onClick={() => countHandler(1)}>+1</p>}
          addonAfter={<p onClick={() => countHandler(-1)}>-1</p>}
          defaultValue={0}
        />
      )}
      {userRole === "admin" ? (
        <button onClick={editHandler}>Edit</button>
      ) : (<></>
        // <button onClick={editHandler}>Edit</button>
      )}
    </>
  );
}
