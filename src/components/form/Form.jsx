import React, { useEffect, useState } from "react";

//import react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//import mask input phone number
// import InputMask from "react-input-mask";

//import components
import ButtonForm from "../buttons/buttonForm/ButtonForm";

//import sass
import "./Form.sass";

//schema para validação de dados inputs
const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("E-mail obrigatório"),
    phone: yup
      .string("Digite um telefone válido")
      .min(9, "Telefone deve conter pelo menos 9 números")
      .required("Telefone é obrigatório"),
  })
  .required();

const FormContact = () => {
  //validation form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //mask phone
  const normalizePhone = (value) => {
    return (
      value
        ?.replace(/[\D]/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})(\d+?)/, "$1") || ""
    );
  };

  //mask phone = listening when useForm change, getting a value. When changed call the useEffect
  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", normalizePhone(phoneValue));
  }, [phoneValue]);

  //recebe os dados do formulário
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //salva o status de salvo com sucesso ou não salvo
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  //Recebe os dados e Enviar para o back-end(requisição para back end)
  const onSubmit = async (userData) => {
    console.log(JSON.stringify(userData));

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!",
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: " Opss! Usuário não cadastrado.",
      });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fields">
          <label className="sr-only ">Nome</label>
          <input
            className="formInput"
            name="name"
            placeholder="*Nome"
            {...register("name", { required: true })}
          />
          <p className="messageError">{errors.name?.message}</p>
        </div>
        <div className="fields">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="formInput"
            name="email"
            id="email"
            placeholder="*E-mail"
            {...register("email", { required: true })}
          />
          <p className="messageError">{errors.email?.message}</p>
        </div>
        <div className="fields">
          <label className="sr-only " htmlFor="phone">
            Telefone
          </label>
          <input
            className="formInput"
            name="phone"
            id="phone"
            placeholder="(99)99999-9999"
            type="tel"
            inputMode="numeric"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizePhone(value);
            }}
            {...register("phone", { required: true })}
          />
          <p className="messageError">{errors.phone?.message}</p>
        </div>
        <div className="fields">
          <label className="sr-only" htmlFor="message">
            Telefone
          </label>
          <textarea
            className="formInput"
            name="message"
            id="message"
            placeholder="Digite sua mensagem"
            type="text"
            {...register("message")}
          />
        </div>
        <div>
          <ButtonForm type="submit" />
        </div>
      </form>
      {/* register user sucess/error message */}
      {status.type === "success" ? (
        <p className="sendMessage" style={{ color: "green" }}>
          {status.mensagem}
        </p>
      ) : (
        ""
      )}
      {status.type === "error" ? (
        <p className="sendMessage" style={{ color: "#ff0000" }}>
          {status.mensagem}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormContact;
