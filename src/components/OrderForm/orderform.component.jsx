import { useFormik } from "formik";
import { orderSchema } from "../../utils/schemas/orderform.schema";
import "./orderform.styles.scss"
import { PatternFormat } from 'react-number-format';
import { submitOrder } from "../../store/shop/shop.action";
import { useSelector, useDispatch } from 'react-redux';

export const OrderForm = () =>{
    const dispatch = useDispatch();
    const {cardinBucket} = useSelector(((store)=>{
        return {
          cardinBucket:store.shop.cardinBucket
        }
      }))

    const onSubmit = async (values, actions) => {
        console.log(cardinBucket)
        console.log(values);
        dispatch(submitOrder(values))
        actions.resetForm();
      };
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
            name:"",
            lastname:"",
          email: "",
          age: "",
          phone: "",
          deliverAdress: "",
        },
        validationSchema: orderSchema,
        onSubmit,
      });
    
    return (
       <>
        <h3>Order details</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">Name</label>
      <input
        value={values.name}
        onChange={handleChange}
        id="name"
        type="text"
        placeholder="Enter your name"
        onBlur={handleBlur}
        className={errors.name && touched.name ? "input-error" : ""}
      />
      {errors.name && touched.name && <p className="error">{errors.lastname}</p>}
      <label htmlFor="lastname">Lastname</label>
      <input
      value={values.lastname}
      onChange={handleChange}
      id="lastname"
      type="text"
      placeholder="Enter your last name"
      onBlur={handleBlur}
      className={errors.lastname && touched.lastname ? "input-error" : ""}
    />
    {errors.name && touched.name && <p className="error">{errors.name}</p>}
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
      <label htmlFor="phone">Phone number</label>
      <PatternFormat
      format="(###)###-##-##"
        id="phone"
        type="text"
        placeholder="(###)###-##-##"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.phone && touched.phone ? "input-error" : ""}
      />
      {errors.phone && touched.phone && (
        <p className="error">{errors.phone}</p>
      )}
      <label htmlFor="deliverAdress">Adress</label>
      <input
        id="deliverAdress"
        type="text"
        placeholder="Enter adress for shiping"
        value={values.deliverAdress}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.deliverAdress && touched.deliverAdress ? "input-error" : ""
        }
      />
      {errors.deliverAdress && touched.deliverAdress && (
        <p className="error">{errors.deliverAdress}</p>
      )}
      <button disabled={isSubmitting} type="submit">
      Checkout
      </button>
    </form>
    </>
    )
}