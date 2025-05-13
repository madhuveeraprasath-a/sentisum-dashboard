"use client";
import { Form, Input } from "antd";
import useNotification from "antd/es/notification/useNotification";
import { useRouter } from "next/navigation";

const LoginComponent = () => {
  const router = useRouter();
  const [api, contextHolder] = useNotification();

  const onFinishHandler = (values: { email: string; password: string }) => {
    const { email, password } = values;

    if (
      email === "product-designer@sentisum.com" &&
      password === "Designer@321"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    } else {
      api.error({
        message: "Login Failed",
        description: "Invalid email or password",
        placement: "topRight",
      });
    }
  };

  const forgotPasswordHandler = () => {
    api.info({
      message: "Forgot Password",
      description: "Please contact support for password reset.",
      placement: "topRight",
    });
  };

  const createAccountHandler = () => {
    window.open("https://app.sentisum.com/onboard", "_blank");
  };

  return (
    <div className="bg-neutral-100 md:shadow rounded-xl md:p-8 p-4 w-[500px]">
      {contextHolder}
      <p className="font-semibold text-lg">Login to your sentiSum dashboard</p>
      <div className="mt-5">
        <Form
          layout="vertical"
          scrollToFirstError
          onFinish={onFinishHandler}
          requiredMark={false}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-11"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              type="password"
              placeholder="Enter your password"
              className="h-11"
            />
          </Form.Item>
          <p
            onClick={forgotPasswordHandler}
            className="text-primary-500 font-semibold text-right cursor-pointer"
          >
            Forgot password?
          </p>

          <Form.Item>
            <button className="h-11 rounded-lg w-full bg-black text-neutral-100 font-semibold text-sm px-4 mt-4 transition-all duration-300">
              LOGIN
            </button>
          </Form.Item>

          <p className="text-center">
            Don&apos;t have a SentiSum account?{" "}
            <span
              onClick={createAccountHandler}
              className="text-primary-500 font-semibold cursor-pointer"
            >
              Create Now?
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
