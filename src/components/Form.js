import '../style/form.css';

const Form = ({ handleSubmitForm, handleSearchCoin, searchCoin }) => {
  return (
    <form onSubmit={handleSubmitForm} className="form">
      <input
        onChange={handleSearchCoin}
        className="form__input"
        type="text"
        value={searchCoin}
        placeholder="Search ..."
      />
    </form>
  );
};

export default Form;
