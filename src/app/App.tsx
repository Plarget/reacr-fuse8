import { withProviders } from "./providers"
import { Route, Routes } from "react-router-dom"
import Layout from "@/widgets/Layout"
import MainPage from "@/pages/MainPage"
import HistoryPage from "@/pages/HistoryPage"
import "./styles"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="history" element={<HistoryPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default withProviders(App)