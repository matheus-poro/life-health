import React, { useState } from 'react';
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./Login.css";
import ImgCreate from "./ImgCreate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
import 'firebase/firestore';
import { Controller, useForm, useWatch } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { initFirebase } from '../../services/firebase';
import { Link, Navigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
// import axios from 'axios';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginCreate = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [dataOfBirthIsError, setDataOfBirthIsError] = useState<boolean>(false);
    const [isNavigate, setIsNavigate] = useState<boolean>(false);
    // const [isValidCRM, setIsValidCRM] = useState<boolean>(false);

    const { userType } = useSelector((state: RootState) => state.lifeHealthDataSlice)

    const app = initFirebase();
    const auth = getAuth(app);
    const db = getFirestore(app);

    const {
        control,
        setValue,
        handleSubmit,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            femaleBiologicalGender: false,
            maleBiologicalGender: false,
            dataOfBirth: '',
            privacyPolicy: false,
            medicalSpecialty: '',
            crm: 0,
        },
    });

    // Fecha a snackbar de alerta ao clicar fora 
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    };

    const onSubmit = async (formData: Object) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log({ ...formData, type: userType })

                // Salvar informações adicionais do usuário regular no banco de dados Firestore
                addDoc(collection(db, userType), { ...formData, type: userType });
                setOpen(true);
                setTimeout(() => {
                    setIsNavigate(true)
                }, 5000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const fullname = useWatch({
        control,
        name: "fullname",
    });

    const email = useWatch({
        control,
        name: "email",
    });

    const password = useWatch({
        control,
        name: "password",
    });

    const femaleBiologicalGender = useWatch({
        control,
        name: "femaleBiologicalGender",
    });

    const maleBiologicalGender = useWatch({
        control,
        name: "maleBiologicalGender",
    });

    const dataOfBirth = useWatch({
        control,
        name: "dataOfBirth",
    });

    const privacyPolicy = useWatch({
        control,
        name: "privacyPolicy",
    });

    const medicalSpecialty = useWatch({
        control,
        name: "medicalSpecialty"
    });

    const crm = useWatch({
        control,
        name: "crm",
    });

    const isDisabled = () => {
        if (userType === "user") {
            if (
                fullname &&
                email &&
                (password.length >= 6) &&
                (femaleBiologicalGender || maleBiologicalGender) &&
                ((new Date(dataOfBirth).getTime() <= new Date().getTime()) ? true : false) &&
                privacyPolicy
            ) {
                return false;
            } else {
                return true;
            }
        } else {
            if (
                fullname &&
                email &&
                (password.length >= 6) &&
                medicalSpecialty &&
                crm &&
                (femaleBiologicalGender || maleBiologicalGender) &&
                ((new Date(dataOfBirth).getTime() <= new Date().getTime()) ? true : false) &&
                privacyPolicy
            ) {
                return false;
            } else {
                return true;
            }
        }
    }

    // const validateCRM = async (crm: number) => {
    //     console.log(crm);
    //     try {
    //         const response = await axios.get(`https://api.consultacrm.com.br/api/CRM/${crm}.json`);
    //         const dadosMedico = response.data;

    //         // Verifique os dados do médico retornado pela API
    //         console.log(dadosMedico);

    //         // Faça a validação do CRM de acordo com suas regras de negócio
    //         if (dadosMedico.ativo) {
    //             setIsValidCRM(false);
    //             console.log('CRM válido');
    //         } else {
    //             setIsValidCRM(true);
    //             console.log('CRM inválido');
    //         }
    //     } catch (error) {
    //         setIsValidCRM(true);
    //         console.error('Erro ao consultar o CRM:', error);
    //     }
    // };


    return (
        <section className="form-container form-container-register">
            <div className="effect"></div>
            <ImgCreate />
            <div className="form-content">
                {isNavigate && (
                    <Navigate to="/" replace={true} />
                )}
                <div className="form">
                    <h2 className="form-title">Cadastre-se para ter acesso</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <Controller
                            name='fullname'
                            control={control}
                            render={({ field: { onChange, onBlur, value, name } }) => {
                                return (
                                    <Input
                                        id={"fullname"}
                                        type={"text"}
                                        name={name}
                                        label={"Nome completo"}
                                        stylesLabel={"label-login"}
                                        stylesInput={"input-login"}
                                        stylesWrapper={undefined}
                                        stylesError={undefined}
                                        value={value}
                                        error={false}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                    />
                                );
                            }}
                        />

                        <Controller
                            name='email'
                            control={control}
                            render={({ field: { onChange, onBlur, value, name } }) => {
                                return (
                                    <Input
                                        id={"email"}
                                        type={"text"}
                                        name={name}
                                        label={"E-mail"}
                                        stylesLabel={"label-login"}
                                        stylesInput={"input-login"}
                                        stylesWrapper={undefined}
                                        stylesError={undefined}
                                        value={value}
                                        error={false}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                    />
                                );
                            }}
                        />

                        {userType === 'doctor' ? (
                            <>
                                <Controller
                                    name='medicalSpecialty'
                                    control={control}
                                    render={({ field: { onChange, onBlur, value, name } }) => {
                                        return (
                                            <Input
                                                id={"medicalSpecialty"}
                                                type={"text"}
                                                name={name}
                                                label={"Especilaidade médica"}
                                                stylesLabel={"label-login"}
                                                stylesInput={"input-login"}
                                                stylesWrapper={undefined}
                                                stylesError={undefined}
                                                value={value}
                                                error={false}
                                                onChange={onChange}
                                                onBlur={onBlur}
                                            />
                                        );
                                    }}
                                />

                                <Controller
                                    name='crm'
                                    control={control}
                                    render={({ field: { onChange, onBlur, value, name } }) => {
                                        return (
                                            <>
                                                <Input
                                                    id={"crm"}
                                                    type={"number"}
                                                    name={name}
                                                    label={"CRM"}
                                                    stylesLabel={"label-login"}
                                                    stylesInput={"input-login"}
                                                    stylesWrapper={undefined}
                                                    stylesError={undefined}
                                                    value={value}
                                                    error={false}
                                                    onChange={(e) => {
                                                        // validateCRM(Number(e.target.value));
                                                        onChange(e);
                                                    }}
                                                    onBlur={onBlur}
                                                />
                                                {/* {isValidCRM ? (
                                                    <p className='text-alert'>
                                                        <i className="fa-solid fa-circle-exclamation"></i>
                                                        {' '}
                                                        CRM ${value} inválido, verifique o número e tente novamente.
                                                    </p>
                                                ) : undefined} */}
                                            </>
                                        );
                                    }}
                                />
                            </>
                        ) : undefined}

                        <Controller
                            name='password'
                            control={control}
                            render={({ field: { onChange, onBlur, value, name } }) => {
                                return (
                                    <>
                                        <Input
                                            id={"password"}
                                            type={"password"}
                                            name={name}
                                            label={"Senha"}
                                            stylesLabel={"label-login"}
                                            stylesInput={"input-login"}
                                            stylesWrapper={undefined}
                                            stylesError={undefined}
                                            value={value}
                                            error={isError}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                if (value.length < 6) {
                                                    setIsError(true);
                                                } else {
                                                    setIsError(false);
                                                }
                                                onChange(e);
                                            }}
                                            onBlur={onBlur}
                                        />
                                        {isError ? (
                                            <p className='text-alert'>
                                                <i className="fa-solid fa-circle-exclamation"></i>
                                                {' '}
                                                Informe uma senha que contenha 6 ou mais caracteres.
                                            </p>
                                        ) : undefined}
                                    </>
                                );
                            }}
                        />

                        <FormControl className="radio-group">
                            <FormLabel id="demo-row-radio-buttons-group-label text-login text-size">
                                Sexo Biológico:
                            </FormLabel >
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="position"
                            >
                                <Controller
                                    name="femaleBiologicalGender"
                                    control={control}
                                    render={() => {
                                        return (
                                            <FormControlLabel
                                                value="feminino"
                                                control={<Radio />}
                                                label="Feminino"
                                                labelPlacement="end"
                                                onChange={() => {
                                                    setValue('femaleBiologicalGender', true);
                                                    setValue('maleBiologicalGender', false);
                                                }}
                                            />
                                        )
                                    }}
                                />

                                <Controller
                                    name='maleBiologicalGender'
                                    control={control}
                                    render={() => {
                                        return (
                                            <FormControlLabel
                                                value="masculino"
                                                control={<Radio />}
                                                label="Masculino"
                                                labelPlacement="end"
                                                onChange={() => {
                                                    setValue('maleBiologicalGender', true);
                                                    setValue('femaleBiologicalGender', false);
                                                }}
                                            />
                                        )
                                    }}
                                />
                            </RadioGroup>
                        </FormControl>

                        <Controller
                            name='dataOfBirth'
                            control={control}
                            rules={{
                                validate: (value) => {
                                    if (new Date(value).getTime() <= new Date().getTime()) {
                                        return;
                                    } else {
                                        return "Data de nascimento inválida";
                                    }
                                },
                            }}
                            render={({ field: { onChange, onBlur, value, name } }) => {
                                return (
                                    <>
                                        <Input
                                            id={"dataOfBirth"}
                                            type={"date"}
                                            name={name}
                                            label={"Data de nascimento"}
                                            stylesLabel={"label-login"}
                                            stylesInput={"input-login"}
                                            stylesWrapper={undefined}
                                            stylesError={undefined}
                                            value={value}
                                            error={dataOfBirthIsError}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                if (new Date(value).getTime() <= new Date().getTime()) {
                                                    setDataOfBirthIsError(false);
                                                } else {
                                                    setDataOfBirthIsError(true);
                                                }
                                                onChange(e)
                                            }}
                                            onBlur={onBlur}
                                        />
                                        {dataOfBirthIsError ? (
                                            <p className='text-alert'>
                                                <i className="fa-solid fa-circle-exclamation"></i>
                                                {' '}
                                                Data de nascimento inválida.
                                            </p>
                                        ) : undefined}
                                    </>
                                );
                            }}
                        />

                        <div className="form-privacy-policy">
                            <FormGroup>
                                <Controller
                                    name="privacyPolicy"
                                    control={control}
                                    render={({ field: { onChange } }) => {
                                        return (
                                            <FormControlLabel
                                                required
                                                control={<Checkbox />}
                                                label=""
                                                onChange={onChange}
                                            />
                                        )
                                    }}
                                />
                            </FormGroup>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                Ao se cadastrar voce concorda com
                                a nossa <b>política de privacidade.</b>
                            </FormLabel>
                        </div>
                        {/* {loading ? (
                            <Button styleBtn={"btn-search"} >Cadastrando...</Button>
                        ) : ( */}
                        {/* <Button styleBtn={"btn-search"} >Cadastrar</Button> */}
                        {/* )}
                        <Error error={error} /> */}
                        <div className={"login-container register"}>
                            <div className={"text-login"}>
                                <p>Já possui uma conta?</p>
                                <Link className={"link-login"} to="/">
                                    Faça login
                                </Link>
                            </div>
                        </div>
                        <Button
                            disabled={isDisabled()}
                            styleBtn={!isDisabled() ? "btn-search btn-container" : "btn-disable"}
                        >
                            Cadastrar
                        </Button>
                    </form>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Cadastro realizado com sucesso!
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </section>
    );
};
export default LoginCreate;