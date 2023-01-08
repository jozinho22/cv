const getThemes = () => {
    
    var j = -1;
    return [
                {id: ++j, name: 'Blank'},
                {id: ++j, name: 'Darcula'},
                {id: ++j, name: 'Purple'}
            ];
}

const getThemeIfStoredThemeExists = (theme) => {
    var themes = getThemes();
    for(var t of themes) {
        if(t.name === theme) {
            return t;
        }
    }
}

export {getThemes, getThemeIfStoredThemeExists};