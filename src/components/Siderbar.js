import React from 'react';
import SiderBarHeader from '../components/SiderBarHeader'

const Siderbar = ({header,children,ceter}) => {
    return (
        <>
            <div className='flex-parent viewport-full relative scroll-hidden'>
                <div  className='flex-child w-full w360-ml absolute static-ml left bottom'>
                    <div className='flex-parent flex-parent--column viewport-third h-full hmax-full bg-white'>
                        <div className='flex-child flex-child--grow px12 py12 scroll-auto'>
                            <h3 className='txt-m txt-bold mb6'>
                                <SiderBarHeader width={80} height={80}></SiderBarHeader>
                            </h3>
                  
                            <div className="txt-h1 txt-bold mb12" style={{color:'red'}}>Me permite saber estoy cerca del algun caso de COVID 19</div>

                            <div className="txt-s grid mb18 ">
                                <div className="col col--12">
                                    <div className=" px3 py3">
                                        <img className={'icon-virus'} src="img/iconsVirus/asintomaticosPositivos.svg"/>

                                        ASINTOMATICOS POSITIVOS
                                    </div>
                                </div>
                              
                            </div>
                            <div className="txt-s grid mb18 ">
                                <div className="col col--12">
                                    <div className=" px3 py3">
                                        <img className={'icon-virus'} src="img/iconsVirus/hospitalizados.svg"/>

                                        HOSPITALIZADOS
                                    </div>
                                </div>
                               
                            </div>
                            <div className="txt-s grid mb18 ">
                                <div className="col col--8">
                                    <div className=" px3 py3">
                                        <img className={'icon-virus'} src="img/iconsVirus/graves.svg"/>
                                        SINTOMATICOS GRAVES
                                    </div>
                                </div>
                                <div className="col col--4">
                                    <div className=" px3 py3"></div>
                                </div>
                            </div>
                            <div className="txt-s grid mb18 ">
                                <div className="col col--8">
                                    <div className=" px3 py3">
                                        <img className={'icon-virus'} src="img/iconsVirus/muertos.svg"/>
                                        FALLECIDOS
                                    </div>
                                </div>
                                <div className="col col--4">
                                    <div className=" px3 py3"></div>
                                </div>
                            </div>
                        </div>
                        <footer className='px12 py12 bg-gray-faint txt-s'>
                          <a href="https://github.com/olanaso/donde-hay-COVID19" target='_blank'><i className="fa fa-2x fa-github" aria-hidden="true"></i>
                             
                          </a>
                            <a className={'pull-rigth'} href="https://github.com/olanaso/" target='_blank' >
                                Developed by Olanaso
                            </a>
                            
                        </footer>
                    </div>
                </div>
                <div className='flex-child flex-child--grow bg-darken10 viewport-twothirds viewport-full-ml'>
                  
                        {children}
                  
                </div>
            </div>
        </>
    );
};

export default Siderbar;