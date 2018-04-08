const transformText = input => input.split('').map(s => ({ letter: s, isVisible: false }));

export default transformText;
