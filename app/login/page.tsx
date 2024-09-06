"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { googleLogin } from "@/apis/auth/firebaseAuth";
import { useAuth } from "@/context/authContext";

const Login = () => {
  const auth = useAuth()
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const user = await auth?.login(values.email, values.password);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form name="login" onFinish={onFinish}>
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
            Login
          </Button>
        </Form.Item>
      </Form>

      {/* Google Login Button */}
      <Button
        onClick={googleLogin}
        style={{
          backgroundColor: "#DB4437",
          color: "#fff",
          marginRight: "10px",
        }}
      >
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
