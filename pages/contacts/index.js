import styles from "../../styles/Contacts.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return {
    props: {
      contacts: data
    }
  };
};

// original object is props
const Contacts = ({ contacts }) => {
  return (
    <div className="contacts">
      <h1>All Contacts</h1>
      {contacts.map((contact) => (
        <Link href={`/contacts/${contact.id}`} key={contact.id}>
          <a className={styles.single}>
            <h3>{contact.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Contacts;
