import React from 'react'
import { Switch } from 'antd';
import { useRouter } from "next/router";
function locale_button() {
    const router = useRouter()
    const hanleChangeLang = (value) => {
        console.log(value);
        router.push(router.asPath,router.asPath, { locale: !value ? "vn" : "en" })
    };
    return (
        <div className='locale_button'>
            <Switch checkedChildren="en" unCheckedChildren="vn"  defaultChecked={router.locale!="vn"} onChange={(value) => {
                hanleChangeLang(value)
            }} />
        </div>
    )
}

export default locale_button