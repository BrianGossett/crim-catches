import renderer from 'react-test-renderer';
import Home from '../home';

describe('My Page', () => {
    it('is Displayed correctly', () =>{
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})