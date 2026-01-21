import Button from '../Button';
import TextInput from '../TextInput';
import './todo-form.style.css'

export default function ToDoForm({ onSubmit }) {
  return (
    <div>
      <form action={onSubmit} className='todo-form'>
        <TextInput 
          placeholder="Digite o item que deseja adicionar"
          required
          name="description"
        />

        <Button>Salvar item</Button>
      </form>
    </div>
  );
}
