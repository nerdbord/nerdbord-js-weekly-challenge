const middleContent = () => {
    const mainDiv = document.createElement('div');
    mainDiv.innerText = 'yo, wassup';
    return mainDiv;
}

const root = document.getElementById('root');
root.append(middleContent());