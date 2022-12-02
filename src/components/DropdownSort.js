import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


export default function DropdownSort(props) {

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Form>      
        <div key={`radio-featured`} className="mb-3">
          <Form.Check 
            type='radio'
            name='sort'
            id='Popularity'
            label='Popularity'
            defaultChecked
            onClick={props.resetSort}
          />
        </div>

        <div key={`radio-calories`} className="mb-3">
          <Form.Check 
            type='radio'
            name='sort'
            id='Calorie burn'
            label='Calorie burn'
            onClick={props.sortData}
          />
        </div>
    
    
    </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}