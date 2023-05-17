import { createContext } from 'react'
import HelloLicat from './component/HelloLicat1';

// UserInfo component에 context생성
const userInfo = createContext();

function AppConsumer() {
    return (
        <>
            <userInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
                <HelloLicat />
            </userInfo.Provider>
        </>
    );
}


export { userInfo, AppConsumer }