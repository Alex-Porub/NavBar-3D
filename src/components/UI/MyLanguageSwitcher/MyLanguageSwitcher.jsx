import React, { useState } from 'react'
import cl from "./MyLanguageSwitcher.module.scss";
import { useTranslation } from 'react-i18next';

export default function MyLanguageSwitcher() {
    const { t, i18n } = useTranslation();
    const [isLangSelectorOpened, setIsLangSelectorOpened] = useState(false);
    const locales = {
        en: { title: 'English' },
        ua: { title: 'Українська' }
    };
    const setLanguage = function (value) {
        i18n.changeLanguage(value);
        setIsLangSelectorOpened(false);
    }

    return (
        <div
            className={cl.languageSwitcher}
        >
            <button className={cl.languageSwitcher__current + " " + cl["lang-" + i18n.resolvedLanguage]}
                onClick={() => setIsLangSelectorOpened(!isLangSelectorOpened)}
            >
                {i18n.resolvedLanguage}
            </button>

            <nav>
                <ul className={cl.languageSwitcher__selector + (isLangSelectorOpened ? ` ${cl.opened}` : "")}>
                    {Object.keys(locales).map((locale) => (
                        <li key={locale}><button className={cl.selector_item + (i18n.resolvedLanguage === locale ? ` ${cl.active}` : "")} type="submit" onClick={() => setLanguage(locale)}>
                            {locales[locale].title}
                        </button></li>
                    ))}
                </ul>
            </nav>

        </div>
    )
}
