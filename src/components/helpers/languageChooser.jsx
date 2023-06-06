const languageChooser = (language, infos) => {
    return (language === 'French' ? infos.french : infos.english);
}

export default languageChooser;