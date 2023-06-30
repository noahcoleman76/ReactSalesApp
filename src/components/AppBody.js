import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Demo from "./Demo";
import PricingCall from "./PricingCall";
import JumpStart from "./JumpStart";
import NoPage from "./NoPage";
import DemoComplete from "./DemoComplete";
import ClosedDeal from "./ClosedDeal";
import JumpStartCompleted from "./JumpStartComplete";
import PricingCallCompleted from "./PricingComplete";

export default function AppBody() {
    return (
        <div className="AppBody">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Demo />} />
                        <Route path="democomplete" element={<DemoComplete />} />
                        <Route path="pricingcall" element={<PricingCall />} />
                        <Route path="pricingcallcompleted" element={<PricingCallCompleted />} />
                        <Route path="jumpstart" element={<JumpStart />} />
                        <Route path="jumpstartcompleted" element={<JumpStartCompleted />} />
                        <Route path="closeddeal" element={<ClosedDeal />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}