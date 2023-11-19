import { useState } from 'react';
import {AiFillEye} from 'react-icons/Ai'
import {AiFillEyeInvisible} from 'react-icons/Ai'


const Login = () => {
    const [ShowPwd, setShowPwd] = useState(false)

    const [] = useState(false)

    return <main className='h-screen w-full flex flex-row'>
        <aside className="debug w-6/12"></aside>
        <aside className="debug w-6/12 flex flex-col justify-center items-center bg-[#722e9a]">

            <div  className=" flex flex-col w-2/4 h-3/5 justify-center items-center gap-11 bg-slate-50 rounded-lg shadow-2xl">
                <a className='text-2xl font-bold text-[#facb2e]'>Logeo</a>
                <div className=' justify-between flex flex-col  h-40'>

                    <div>
                        <label className="text-gray-400 ">Nombre de usuario</label>
                        <input type="text" id="first_name" className="bg-gray-200
                         text-sm rounded-lg
                         focus: outline-[#facb2e]
                         focus:ring-yellow-300
                         block w-full p-2.5" placeholder="Aquí su nombre" required></input>
                    </div>

                    <div className="">

                        <label className="text-gray-400 ">Contraseña</label>
                        <div className="flex flex-row items-center">
                            <input type={ShowPwd ? "text" : "password"} id="password" className="bg-gray-200
                         focus: outline-[#facb2e]
                         rounded-lg
                         block w-full p-2.5" placeholder="•••••••••" required>

                            </input>
                            <div className=' pl-2 text-gray-400 hover:text-[#facb2e]' onClick={() => setShowPwd(!ShowPwd)}>
                                {ShowPwd ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </div>

                        </div>

                    </div>

                </div>
                <div className='flex flex-col items-center gap-3'>
            <span className='hover:text-[#facb2e] hover:scale-105 hover:cursor-pointer text-gray-500'>¿Olvidaste tu contraseña?</span>
            <span className='hover:text-[#facb2e] hover:scale-105 hover:cursor-pointer text-gray-500' > 
            <a href="/prueba" >Registrarse</a>
            </span>
            </div>
            
            <div className="bg-[#facb2e] pl-4 pr-4 pt-2 pb-2 rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-none text-white font-bold text-lg shadow-md">Ingresar</div>

            </div>


        </aside>


    </main>;
};

  export default Login;