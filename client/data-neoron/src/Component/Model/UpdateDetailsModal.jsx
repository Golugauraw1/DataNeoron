import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Input from '../common/Input';
import Button from '../common/Button';

const UpdateDetailsModal = ({ isOpen, onClose, onSubmit, initialValues }) => {
    const [updateData, setUpdateData] = useState({});

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setUpdateData(initialValues);
    }, [initialValues])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
        const errors = {};
        // Example validation, you can customize this according to your needs
        if (!updateData?.userName) {
            errors.userName = 'Name is required';
        }
        if (!updateData?.email) {
            errors.email = 'email is required';
        }
        if (!updateData?.mobileNumber) {
            errors.mobileNumber = 'mobileNumber is required';
        }
        
        if (Object.keys(errors).length === 0) {
            // No errors, submit the form
            const { userName, email, mobileNumber} = updateData
            onSubmit({ userName, email, mobileNumber });
            // Close the modal
            onClose();
        } else {
            // Set errors
            setErrors(errors);
        }
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="max-w-md mx-auto bg-[#020203] text-white shadow-md rounded px-8 pt-6 pb-8 my-[10%] text-left"
        >
            <div>
                <h1 className="text-3xl font-bold mb-4 text-center">Update client data!</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    placeholder="Name"
                    value={updateData?.userName}
                    onChange={(e) => setUpdateData(prev => ({ ...prev, userName: e.target.value }))}
                    className="mb-4"
                    error={errors.name}
                />
                <Input
                    label="Email"
                    placeholder="Email"
                    value={updateData?.email}
                    onChange={(e) => setUpdateData(prev => ({ ...prev, email: e.target.value }))}
                    className="mb-4"
                    error={errors.email}
                />
                <Input
                    label="Mobile Number"
                    placeholder="mobileNumber"
                    value={updateData?.mobileNumber}
                    onChange={(e) => setUpdateData(prev => ({ ...prev, mobileNumber: e.target.value }))}
                    className="mb-4"
                    error={errors.mobileNumber}
                />

                <Button type="submit" className="w-full">
                    Update data
                </Button>
            </form>
        </Modal>
    );
};

export default UpdateDetailsModal;
