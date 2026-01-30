import './empty-state.style.css'

export default function EmptyState() {
  return (
    <section className='empty-state'>
        <p>Ainda Não Há Tarefas Cadastradas. Adicione Para Começar</p>
        <img src="/empty.png" alt="Estado vazio" />;
    </section>
)
}
