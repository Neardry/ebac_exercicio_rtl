import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://scontent.fpoa14-1.fna.fbcdn.net/v/t31.18172-8/22770947_1876016012425225_4620003657850310043_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0327a3&_nc_ohc=xyZ5M6RUE-gQ7kNvgHxoxVh&_nc_ht=scontent.fpoa14-1.fna&_nc_gid=A7HKfEELRWKLZEPqXnLWtHh&oh=00_AYCRSU2f6gcGixi3XJABaZOQtIAqRK3kCs8Iuh0O00e-1A&oe=67212B53">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
