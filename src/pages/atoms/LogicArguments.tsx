import ExtLink from '../../components/ext-link'

const LogicArguments = () => {
  return (
    <div className="flex flex-col items-center w-full h-[150vh] max-md:h-[160vh] my-10 gap-8">
      <div
        className="flex flex-col items-center gap-7 w-full text-centr p-6 text-center"
        id="title"
      >
        <h4 className="text-2xl">Não seja enganado!</h4>
        <p>
          A Lógica pode te ajudar a identificar falácias, seja em falas
          corriqueiras ou até mesmo discursos políticos.
        </p>
      </div>
      <div
        className="flex w-full h-2/6 justify-around max-md:flex-col max-md:gap-6 max-md:w-5/6 max-md:my-8"
        id="argument"
      >
        <div className="flex justify-center items-center bg-black/20 h-3/4 w-5/12 max-md:w-full p-9 border-[1px] border-red-500">
          <ol type="1" className="list-decimal font-bold w-60">
            <li className="my-1">
              Se o meu governo foi bom, então os jovens estudam mais.
            </li>
            <li className="my-1">Os jovens estudam mais.</li>
            <li className="my-1">Logo, meu governo foi bom.</li>
          </ol>
        </div>
        <div className="flex justify-center items-center bg-black/20 h-3/4 w-5/12 max-md:w-full p-9 border-[1px] border-red-600">
          <ol type="1" className="list-decimal font-bold">
            <li>P ⇒ Q</li>
            <li>Q</li>
            <li>∴P [1,2]</li>
          </ol>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-2 w-[50%] text-center p-4 max-md:w-full max-md:my-3"
        id="argumentDescription"
      >
        <p>
          A falácia em questão se chama{' '}
          <span className="italic cursor-pointer">
            <ExtLink href="https://pt.wikipedia.org/wiki/Afirma%C3%A7%C3%A3o_do_consequente">
              afirmação do consequente
            </ExtLink>
          </span>
          . Numa expressão condicional{' '}
          <span className="font-bold text-lime-500">(P ⇒ Q)</span>, não se pode
          afirmar o consequente{' '}
          <span className="font-bold text-lime-500">(Q)</span> para concluir o
          antecedente <span className="font-bold text-lime-500">(P)</span>,
          apesar do contrário ser possível.
        </p>
        <br />
        <p>
          A Lógica nos ajuda a identificar essas falácias que estão contidas na
          própria forma do argumento, de modo que{' '}
          <strong>não sejamos enganados tão facilmente</strong>!
        </p>
      </div>
    </div>
  )
}

export default LogicArguments
