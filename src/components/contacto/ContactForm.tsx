import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ErrorMessage = ({ message }: { message: string | undefined }) => {
    return (
        <span className="text-red-500 font-semibold -bottom-6 left-0 text-sm">
            {message}
        </span>
    );
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors},
        reset
    } = useForm();

    const [popup, setPopup] = useState(false);

    const onSubmit = handleSubmit((data: any) => {
        console.log(data);
        setPopup(true);
        reset();
    });

    return (
        <section className="h-[calc(100vh-56px)] flex justify-center items-center">
            {popup && (
                <div className="fixed inset-0 z-30 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-[#25262B] p-5 rounded-xl">
                        <h1 className="text-4xl font-bold mb-5">
                            Mensaje Enviado
                        </h1>
                        <p className="text-lg">
                            Gracias por tu mensaje, nos pondremos en contacto
                            contigo lo antes posible.
                        </p>
                        <button
                            onClick={() => setPopup(false)}
                            className="bg-[#1F6FF5] py-2 px-3 rounded-xl mt-6 hover:bg-[#286add] transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={onSubmit} className="flex flex-col w-96 gap-4 p-4">
                <h1 className="mx-auto text-4xl font-bold mb-5">
                    Únete a nosotros
                </h1>

                <div className="relative">
                    <label className="block mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            minLength: {
                                value: 7,
                                message:
                                    "El nombre requiere 7 caracteres como mínimo",
                            },
                        })}
                        className="bg-[#25262B] px-3 py-2 border border-[#1A1B1E] rounded-xl w-full hover:bg-[#313236] transition-colors"
                    />
                    {errors.name && (
                        <ErrorMessage
                            message={errors.name?.message as string}
                        />
                    )}
                </div>

                <div className="relative">
                    <label className="block mb-2" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Campo Obligatorio",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Correo Electrónico Inválido",
                            },
                        })}
                        className="bg-[#25262B] px-3 py-2 border border-[#1A1B1E] rounded-xl w-full hover:bg-[#313236] transition-colors"
                    />
                    {errors.email && (
                        <ErrorMessage
                            message={errors.email?.message as string}
                        />
                    )}
                </div>

                <div className="relative">
                    <label className="block mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        {...register("message", {
                            required: {
                                value: true,
                                message: "Campo Obligatorio",
                            },
                            minLength: {
                                value: 20,
                                message:
                                    "El mensaje requiere 20 caracteres como mínimo",
                            },
                        })}
                        className="bg-[#25262B] px-3 py-2 border border-[#1A1B1E] rounded-xl w-full hover:bg-[#313236] transition-colors resize-none h-40"
                    />
                    {errors.message && (
                        <ErrorMessage
                            message={errors.message?.message as string}
                        />
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-[#1F6FF5] py-2 px-3 rounded-xl mt-6 hover:bg-[#286add] transition-colors"
                >
                    Enviar
                </button>
            </form>
        </section>
    );
}
