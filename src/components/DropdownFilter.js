import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


export default function DropdownFilter(props) {

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu onClick={props.selectFilterType}>
      <Form>
        Target:
        {['All', 'Legs', 'Arms', 'Back', 'Chest'].map((label) => (
          //<Dropdown.Item eventKey={label}>
          <Dropdown.ItemText eventKey={label}>
          <Form.Check 
            type='radio'
            name='bodyPart-sort'
            id={label}
            label={label}
          />
          </Dropdown.ItemText>
        //</Dropdown.Item>
        ))}

      Equipment:
      {['None', 'Weights', 'Yoga ball', 'Machine', 'Bench'].map((label) => (
        <div key={`checkbox` + label} className="mb-3">
          <Form.Check 
            type='checkbox'
            id={label}
            label={label}
            //eventKey={label}
          />
        </div>
      ))}
    </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}