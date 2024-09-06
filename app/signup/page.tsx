"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "@/context/authContext";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
    const auth = useAuth();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const user = await auth?.register(values.email, values.password);
      console.log("Registration successful:", user);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form name="register" onFinish={onFinish}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
