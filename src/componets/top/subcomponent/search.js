import React from 'react';

class Search extends React.Component {
    state = {
        search: ''
    }
    searchRef = React.createRef()
    searchHandle = (event) => { 
        event.preventDefault()
        console.log(this.searchRef.current.value)
       this.setState({
           search: this.searchRef.current.value
       },
            this.props.searchApi(this.state.search)
       )

    }
    render(){
        return(
            <React.Fragment>
                <form className='form-inline my-2 my-lg-0 col-ms-6' onSubmit={this.searchHandle}>
                    <div className=''>
                        <input ref={this.searchRef} className='col-ms-4 form-control' type='search' placeholder='busqueda de video' />
                    </div>
                    
                </form>
            </React.Fragment>

        )
    }
}

export default Search;