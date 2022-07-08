import { LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";

import IllustrationImage from "../../assets/bg-2.png";
import LogoImage from "../../assets/logo.png";

import { useAuth } from "../../hooks/auth";

export function Login() {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await signIn(values.login, values.password);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="bg-gradient-to-tr from-purple-600 to-[#ffff00] h-screen hidden sm:flex flex-col justify-center w-full px-6  overflow-y-auto">
        <img
          className="w-64"
          src={IllustrationImage}
          alt="Imagem de uma dashboard"
        />
        <div className="h-1 bg-zinc-300 w-40 mt-8" />
        <h1 className="text-zinc-100 text-3xl font-bold mt-6 ">
          Acompanhe todos seus dados de clientes e instalações preferidas!
        </h1>
        <h2 className="text-zinc-100 text-2xl italic">Onde e quando quiser</h2>
      </div>
      <div className="w-full flex flex-col items-center justify-center overflow-y-auto">
        <div className="flex flex-col items-center justify-center">
          <img className="w-52" src={LogoImage} alt="Logo da NEO Estech" />
          <div className="flex items-center mt-4 mb-2">
            <div className="h-[1px] w-12 bg-zinc-300"></div>
            <span className="text-zinc-400 mx-2">Faça login para começar</span>
            <div className="h-[1px] w-12 bg-zinc-300"></div>
          </div>
        </div>
        <div className="px-8 py-3">
          <Form onFinish={onFinish}>
            <Form.Item
              label="Login"
              name="login"
              rules={[
                {
                  required: true,
                  type: "text",
                },
              ]}
            >
              <Input
                style={{ backgroundColor: "none" }}
                placeholder="Informe seu login"
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item
              label="Senha"
              name="password"
              rules={[
                {
                  required: true,
                  type: "password",
                },
              ]}
            >
              <Input.Password
                autoComplete="off"
                placeholder="Informe sua senha"
              />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={loading}
                size="middle"
                type="primary"
                htmlType="submit"
                className="w-full"
                style={{
                  backgroundColor: "#F97316",
                  border: "none",
                  fontSize: "17px",
                  height: "36px",
                  borderRadius: "4px",
                }}
              >
                {loading ? (
                  <LoadingOutlined
                    style={{ color: "#fff", fontSize: "24px" }}
                  />
                ) : (
                  "Entrar"
                )}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
