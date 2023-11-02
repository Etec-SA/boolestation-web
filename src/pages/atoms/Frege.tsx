import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Frege = () => {
  return (
    <section id="frege" className="flex flex-col w-full h-screen gap-10">
      <div className="flex flex-col justify-center items-center w-full gap-3 text-center p-3">
        <h5 className="text-2xl">Automatize tarefas de Lógica!</h5>
        <p>
          Frege.js, uma biblioteca do time Boolesation pode ajudar você,
          desenvolvedor, realizar operações lógicas com facilidade!
        </p>
      </div>
      <div className="flex w-full justify-around max-md:flex-col">
        <div className="w-2/4 max-md:w-full max-md:p-3">
          <h6 className="text-2xl text-center">Identifique falácias!</h6>
          <p className="my-3 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur culpa reprehenderit ea voluptate in iste. Voluptas
            perferendis molestias modi nesciunt unde, ea, facere dicta
            repellendus laborum provident veniam nostrum quisquam.
          </p>
        </div>
        <div className="w-2/6 max-md:w-3/4 self-center">
          <SyntaxHighlighter
            language="typescript"
            style={materialDark}
            customStyle={{ fontSize: '0.75rem' }}
          >
            {`import { frege } from 'fregejs';

//Inferência Inválida (Falácia):
const first = frege
  .verifyConsequence
  .semantic(['P->Q', 'Q'], 'P');

//Inferência Válida:
const second = frege
  .verifyConsequence
  .semantic(['P->Q', 'P'], 'Q');

console.log('first: ', first); // => false
console.log('second: ', second); // => true`}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="flex w-full justify-around max-md:flex-col-reverse">
        <div className="w-3/6 max-md:w-3/4 self-center">
          <SyntaxHighlighter
            language="typescript"
            style={materialDark}
            customStyle={{ fontSize: '0.75rem' }}
          >
            {`
import { frege, TruthTable } from  'fregejs';
import { isDeepStrictEqual } from 'node:util';

const table: TruthTable = frege
  .generateTruthTable('P->(Q->P)');

const output = {
	headers: [ 'P', 'Q', 'P->(Q->P)' ],
	truthCombinations: [ 
    [ false, false ], 
    [ false, true ], 
    [ true, false ], 
    [ true, true ] 
  ],
  truthValues: [ true, true, true, true ]
}

isDeepStrictEqual(table, output); // => true
`}
          </SyntaxHighlighter>
        </div>
        <div className="w-2/6 max-md:w-full max-md:p-3">
          <h6 className="text-2xl text-center">Construa tabelas-verdade!</h6>
          <p className="my-3 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur culpa reprehenderit ea voluptate in iste. Voluptas
            perferendis molestias modi nesciunt unde, ea, facere dicta
            repellendus laborum provident veniam nostrum quisquam.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-around max-md:flex-col">
        <div className="w-2/4 max-md:w-full max-md:p-3">
          <h6 className="text-2xl text-center">
            Verifique a validade de argumentos!
          </h6>
          <p className="my-3 text-center p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur culpa reprehenderit ea voluptate in iste. Voluptas
            perferendis molestias modi nesciunt unde, ea, facere dicta
            repellendus laborum provident veniam nostrum quisquam.
          </p>
        </div>
        <div className="w-2/6 max-md:w-3/4 self-center">
          <SyntaxHighlighter
            language="typescript"
            style={materialDark}
            customStyle={{ fontSize: '0.75rem' }}
          >
            {`
import { frege, Proof } from 'fregejs';     

const { toFormulaObject } = frege.parse;

const proof: Proof = {
  1: {
    id: 1,
    expression: toFormulaObject('P -> Q'),
    type: 'Premise'
  },
  2: {
    id: 2,
    expression: toFormulaObject('Q'),
    type: 'Premise'
  },
  3: {
    id: 3,
    expression: toFormulaObject('P'),
    type: 'Conclusion',
    from: [[1, 2], 'Modus Ponens']
  },
}

frege.checkProof(proof); // => true`}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  )
}

export default Frege
