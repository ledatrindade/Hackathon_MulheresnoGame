import  express from 'express';

const server = express();

const posts = [
   { id: 1, name: 'Giselle', title: 'Post 1', content: 'Conteúdo do post 1' },
   { id: 2, name: 'Giselle', title: 'Post 2', content: 'Conteúdo do post 2' }
 ];
 
 // Rota GET para obter todos os posts
 server.get('/api/posts', (req, res) => {
   res.json(posts);
 });
 
 // Rota GET para obter um post específico por ID
 server.get('/api/posts/:id', (req, res) => {
   const postId = parseInt(req.params.id);
   const post = posts.find(post => post.id === postId);
 
   if (!post) {
     return res.status(404).json({ error: 'Post não encontrado' });
   }
 
   res.json(post);
 });
 

export { server };