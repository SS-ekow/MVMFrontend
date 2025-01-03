import React, { useState } from "react";
import Layout from "@/components/home/layout";

import Image from 'next/image';

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { PiDevicesDuotone } from "react-icons/pi";

// Define validation schema
const CheckoutSchema = Yup.object().shape({
    addressLine1: Yup.string().required("Address Line 1 is required"),
    addressLine2: Yup.string(),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
});

// Define types for OrderItem props and state
interface Order {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface OrderItemProps {
    item: Order;
    onRemove: (id: number) => void;
}

const Cart: React.FC = () => {
    const [order, setOrder] = useState<Order[]>([
        { id: 1, name: "Product 1", description: "Description 1", price: 10, image: "/path/to/image1.jpg" },
        { id: 2, name: "Product 2", description: "Description 2", price: 20, image: "/path/to/image2.jpg" },
        { id: 3, name: "Product 3", description: "Description 3", price: 30, image: "/path/to/image3.jpg" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const PriceTotal = order.reduce((acc, item) => acc + item.price, 0);

    const handleRemove = (id: number): void => {
        setOrder(order.filter((item) => item.id !== id));
    };

    const handleCheckout = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <section className="py-8 min-h-screen bg-gray-100">
                <div className="w-full h-full container mx-auto bg-white rounded-lg p-8">
                    {order.length > 0 ? (
                        order.map((item) => <OrderItem key={item.id} item={item} onRemove={handleRemove} />)
                    ) : (
                        <p className="text-center text-gray-600">Your cart is empty.</p>
                    )}
                </div>

                {order.length > 0 ? (
                    <button
                        onClick={handleCheckout}
                        className="mt-4 ml-8 bg-blue-500 text-white rounded-lg p-2"
                    >
                        Checkout → Total: $ {PriceTotal}.00
                    </button>
                ) : (
                    <button className="mt-4 ml-8 bg-gray-200 text-gray rounded-lg p-2" disabled>
                        Checkout
                    </button>
                )}

                {isModalOpen && <CheckoutModal onClose={closeModal} totalAmount={PriceTotal} />}
            </section>
        </Layout>
    );
};

const OrderItem: React.FC<OrderItemProps> = ({ item, onRemove }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded" />
                <div className="ml-4">
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-medium">${item.price}</span>
                <button
                    onClick={() => onRemove(item.id)}
                    className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                    x
                </button>
            </div>
        </div>
    );
};

const CheckoutModal: React.FC<{ onClose: () => void; totalAmount: number }> = ({
    onClose,
    totalAmount,
}) => {
    const handleCreateOrder = (values: any) => {
        console.log("Order Created:", values, "Total Amount:", totalAmount);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className='w-10 h-10 rounded-full bg-blue-300 text-blue-800 text-xl text-center font-extrabold flex items-center justify-center'><PiDevicesDuotone /></div>
                        <span className="ml-2 text-xl font-bold text-blue-600">teckZone</span>
                    </div>
                    <span className="ml-2 text-xl font-bold text-blue-600">Checkout</span>
                </div>
                <button className="absolute top-3 right-3 text-gray-500 text-xl" onClick={onClose}>
                    ×
                </button>
                <h2 className="text-2xl font-bold text-center mb-4">Enter Your Address</h2>
                <p className="text-center text-lg font-semibold mb-4">Amount to Pay: ${totalAmount}.00</p>
                <Formik
                    initialValues={{
                        addressLine1: "",
                        addressLine2: "",
                        city: "",
                        state: "",
                    }}
                    validationSchema={CheckoutSchema}
                    onSubmit={handleCreateOrder}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="addressLine1" className="block text-gray-700">
                                    Address Line 1
                                </label>
                                <Field
                                    id="addressLine1"
                                    name="addressLine1"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.addressLine1 && touched.addressLine1 && (
                                    <div className="text-red-500 text-sm">{errors.addressLine1}</div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="addressLine2" className="block text-gray-700">
                                    Address Line 2 (Optional)
                                </label>
                                <Field
                                    id="addressLine2"
                                    name="addressLine2"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-700">
                                    City
                                </label>
                                <Field
                                    id="city"
                                    name="city"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.city && touched.city && (
                                    <div className="text-red-500 text-sm">{errors.city}</div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="state" className="block text-gray-700">
                                    State
                                </label>
                                <Field
                                    id="state"
                                    name="state"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.state && touched.state && (
                                    <div className="text-red-500 text-sm">{errors.state}</div>
                                )}
                            </div>

                            <p className="text-sm text-gray-400 italic"> **By clicking the button below, you agree to pay the total amount stated above upon delivery of items to the specified address.</p>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                Create Order
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Cart;
