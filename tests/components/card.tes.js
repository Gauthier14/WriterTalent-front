import { shallow } from "enzyme";
import Card from 'src/components/Card';
import { Link } from 'react-router-dom';

describe('<Card />', () => {
  test('test fictif pour voir la syntaxe de enzyme', () => {
    // on met des fausses valeurs pour les props obligatoires, en fonction de ce
    // qu'on veut tester
    const wrapper = shallow(<Card title="pizza margherita" thumbnail="img1.png" difficulty="facile" slug="pizza-margherita" />);

    // attention, un console.log sur le wrapper ne sert à rien => utiliser find
    // const h2Element = wrapper.find('h2');
    // const elementWithClass = wrapper.find('.card-content');
    // const linkComponent = wrapper.find(Link);

    // on peut appliquer les comparateurs Jest sur ce qu'on récupère

    // on vérifie qu'on a un seul h2 (toHaveLength : comparateur Jest pour vérifier la longueur d'un tableau)
    expect(wrapper.find('h2')).toHaveLength(1);
  })
});
