import { useTranslation } from "react-i18next"

function BackgroundImage() {
    const {t} = useTranslation()
    return (
        <div className="bg">
            <h1 className="backHeader">{t("SHOP")}</h1>
        <div className="headImg">
        </div>
        </div>
    )
}

export default BackgroundImage
