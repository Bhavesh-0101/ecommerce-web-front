import { useEffect, useState } from "react";
import { paymentApi } from "../../services/ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentSuccess } from "../../store/paymentSlice";


const PaymentHistory = () => {
    const [payment, setPayment] = useState([]);
    const paymentData = useSelector((state) => state.payment.payments);
    const dispatch = useDispatch()

    const fetchPaymentData = async () => {
        if (paymentData.length === 0) {
            const result = await paymentApi('get', '/api/payment/getAllPayment')
            if (result) {
                dispatch(fetchPaymentSuccess(result.data))
                setPayment(result.data);
            }
        } else {
            setPayment(paymentData);
        }

    }

    useEffect(() => {
        fetchPaymentData()
    })

    return (
        <div>
            <h2>Payment History</h2>
            {payment?.length === 0 ? <p>No payment history.</p> : null}
            {payment?.map((item, index) => (
                <div>
                    <div>
                        <h3>{`payment ${index + 1}`}</h3>
                        <div className="information">
                            <p>Total: ${item.paymentAmount}</p>
                        </div>
                        {item.products_id.map((ele) => (
                            <>
                                <p>Product Title: ${ele.title}</p>
                                <p>Product Price: ${ele.price}</p>
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PaymentHistory;
