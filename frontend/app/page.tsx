'use client';
import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Button,
} from '@chakra-ui/react'
import axios from "axios";

const Home: React.FC = () => {
  const [mangas, setMangas] = React.useState<{ id: number; title: string}[]>([])

  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    axios.get('http://localhost:3000/mangas')
    .then(res => setMangas(res.data))
  },[])

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/mangas', {
        title: inputRef.current?.value
      })

      setMangas((mangas) => (
        [
          ...mangas,
          {
            id: response.data.id,
            title: response.data.title
          }
        ]
      ))
    } catch (e) {
      console.log(e);
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/mangas/${id}`)

      setMangas((mangas) => mangas.filter(manga => manga.id !== id))
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <TableContainer w={600} style={{ margin: '50px auto' }}>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>タイトル</Th>
              <Th>削除</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mangas.sort((a, b) => a.id - b.id).map(manga => (
              <Tr key={manga.id}>
                <Td>{manga.id}</Td>
                <Td>{manga.title}</Td>
                <Td>
                  <Button
                    colorScheme='red'
                    onClick={() => handleDelete(manga.id)}
                  >
                    削除
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <VStack
        w={600}
        style={{ margin: '30px auto', border: '1px solid #ccc', padding: 30 }}
        spacing={4}
        align='stretch'
      >
        <input ref={inputRef} placeholder='タイトル' />
        <Button
          colorScheme='blue'
          onClick={handleSubmit}
        >
          追加する
        </Button>
      </VStack>
    </div>
  )
}

export default Home
