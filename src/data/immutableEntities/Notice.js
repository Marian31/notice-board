import Immutable from "immutable"

const Notice = new Immutable.Record({
    id: -1,
    title: '',
    content: '',
    likes: 0,
});

export default Notice;