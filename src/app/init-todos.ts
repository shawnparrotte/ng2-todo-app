export class Init{

  load(){

    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
      console.log('No Todos Found... Creating... ');
      var todos = [
        {
          text: 'Do Something'
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));

    } else {
      console.log('Found Todos');
    }
  }
}
