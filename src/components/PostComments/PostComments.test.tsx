import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Comentários devem renderizar', async () => {
        const { debug } = render(<PostComment />);

        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target: {
                value: 'Carambolas... muito loko'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        await setTimeout(() => {
            fireEvent.change(screen.getByTestId('campo-tarefa'), {
                target: {
                    value: 'Concordo com o comentário acima'
                }
            })
            fireEvent.click(screen.getByTestId('btn-comentar'))

            expect(screen.getByText('Carambolas... muito loko')).toBeInTheDocument()
        }, 600)
        await waitFor(() => {
            expect(screen.getByText('Concordo com o comentário acima')).toBeInTheDocument()
        })
        debug()
    })
});