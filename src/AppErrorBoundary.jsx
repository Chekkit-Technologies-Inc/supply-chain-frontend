import React from 'react';

class AppErrorBoundary extends React.Component {
  state = {
    error: '',
  };

  static getDerivedStateFromError(error) {
    return { error: error.message };
  }

  componentDidCatch(error, info) {
    console.log(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className={`w-full px-6 2xl:px-52 max-w-2000 mx-auto bg-gray-100 bg-horse pb-28 max-h-screen overflow-hidden`}>
          <div className='w-full min-h-screen overflow-hidden flex flex-col items-center justify-center'>
            <div>
              <h1 className='font-bold'>OH NO!</h1>
              <p className='text-green-500 font-medium'>Something went wrong!</p>
              <p>Please reload your browser window</p>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;
