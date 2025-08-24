//  import { createOrder } from '../services/orders-api';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import Stepper from "../components/stepper";
import Breadcrumb from "../components/Breadcrumb"; 
import Header from "../components/header"; 
import Sidebar from "../components/sidebar"; 

function AddIngredient() {



  //  const [formInputs, setFormInputs] = useState({ customerName: '', orderAmount: '', invoiceFile: '' });
  //   const [nameError, setNameError] = useState('');
  //   const [amountError, setAmountError] = useState('');
  //   const [invoiceFileError, setInvoiceFileError] = useState('');

  //   const navigate = useNavigate();

  //   // sending order to server  
  //   const submitOrder = async (formData) => {
  //       try {
  //           const response = await createOrder(formData);
  //           if (response) {
  //               toast.success("order created successfully");
  //               navigate('/');
  //           }
  //       } catch (error) {
  //           toast.error('Failed to create order.');
  //           console.error('Error creating order:', error);
  //       }
  //   };

  // function handleSubmit(event) {
  //     event.preventDefault();

  //     // validation 
  //     if (formInputs.customerName === '') {
  //         return setNameError("Name is required")
  //     }
  //     if (formInputs.orderAmount === '' || isNaN(formInputs.orderAmount)) {
  //         return setAmountError("Valid Order Amount is required")
  //     }
  //     if (formInputs.invoiceFile === '') {
  //         return setInvoiceFileError("Invoice file is required")
  //     }

  //     //using formData api 
  //     const formData = new FormData();
  //     formData.append('customerName', formInputs.customerName);
  //     formData.append('orderAmount', formInputs.orderAmount);
  //     formData.append('invoiceFile', formInputs.invoiceFile);

  //     // send data and clear form
  //     submitOrder(formData);
  //     setNameError('');
  //     setAmountError('');
  //     setInvoiceFileError('');
  //     setFormInputs({ customerName: '', orderAmount: '', invoiceFile: '' });
  // }



  // Handler to update fields from each page
  // const updateData = (pageData) => {
  //   setIngredientData((prev) => ({
  //     ...prev,
  //     ...pageData
  //   }));
  // };

  // API submission
  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("https://your-api-endpoint.com/ingredients", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(ingredientData)
  //     });
  //     const result = await response.json();
  //     console.log("Submitted successfully:", result);
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // };

  return (
    <>
    
    
      {/* Header */}
      <Header/>
      <div className="row  ">
        <div className="col ">
          <Sidebar/>
         </div>
         <div className="col-9 mt-4">
           
          <Breadcrumb/>
      <Stepper />
      </div>
      </div>
       
    </>
  );
}

export default AddIngredient;