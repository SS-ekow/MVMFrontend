import Layout from '@/components/home/layout';
import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

// Define types for the product
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string; // URL for the uploaded image
}

// Define the form's initial values and validation schema
interface ProductFormValues {
  name: string;
  description: string;
  price: string; // Stored as string for easy form management
  category: string;
  image: File | null; // File type for image upload
}

const ProductListingSchema = Yup.object().shape({
  name: Yup.string().required('Product name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().positive('Price must be a positive number').required('Price is required'),
  category: Yup.string().required('Category is required'),
  image: Yup.mixed().required('An image is required'),
});

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Function to handle form submission
  const handleFormSubmit = (values: ProductFormValues, { resetForm }: FormikHelpers<ProductFormValues>) => {
    if (values.image) {
      const newProduct: Product = {
        id: Date.now(),
        name: values.name,
        description: values.description,
        price: parseFloat(values.price),
        category: values.category,
        image: URL.createObjectURL(values.image), // Temporary image URL
      };

      setProducts((prevProducts) => [...prevProducts, newProduct]);
      resetForm();
    }
  };

  return (
    <Layout>
      <section className="min-h-screen bg-blue-100 p-10">
        <div className="container bg-white rounded-xl p-8">
          <h1 className="text-2xl font-bold mb-6">List a New Product</h1>

          <Formik
            initialValues={{
              name: '',
              description: '',
              price: '',
              category: '',
              image: null as File | null,
            }}
            validationSchema={ProductListingSchema}
            onSubmit={handleFormSubmit}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Product Name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && touched.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 font-medium">
                    Description
                  </label>
                  <Field
                    id="description"
                    name="description"
                    as="textarea"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.description && touched.description && (
                    <div className="text-red-500 text-sm">{errors.description}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="price" className="block text-gray-700 font-medium">
                    Price ($)
                  </label>
                  <Field
                    id="price"
                    name="price"
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.price && touched.price && <div className="text-red-500 text-sm">{errors.price}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700 font-medium">
                    Category
                  </label>
                  <Field
                    id="category"
                    name="category"
                    as="select"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                    <option value="sports">Sports</option>
                  </Field>
                  {errors.category && touched.category && (
                    <div className="text-red-500 text-sm">{errors.category}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 font-medium">
                    Product Image
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(event) =>
                      setFieldValue('image', event.currentTarget.files ? event.currentTarget.files[0] : null)
                    }
                  />
                  {errors.image && touched.image && <div className="text-red-500 text-sm">{errors.image}</div>}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                >
                  Add Product
                </button>
              </Form>
            )}
          </Formik>

          <h2 className="text-xl font-bold mt-8">Product List</h2>
          {products.length > 0 ? (
            <ul className="mt-4">
              {products.map((product) => (
                <li key={product.id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                      <span className="text-blue-500">${product.price}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-4">No products listed yet.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductListing;
