import Button from 'react-bootstrap/Button';

export default function PlainButton(props) {
    return (
    <>
      <Button variant="primary">{props.label}</Button>{' '}
    </>
  );
}