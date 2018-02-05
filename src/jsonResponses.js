const respondJSON = (request, response, status, object, headType) => {
  const headers = {
    'Content-Type': headType,
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};
const success = (request, response, params) => {
  if (params.type === 'application/json') {
    const responseJSON = {
      message: 'This is a successful response',
    };

    respondJSON(request, response, 200, responseJSON, params.type);
  } else if (params.type === 'text/xml') {
    const responseXML = 'This is a successful response';

    respondJSON(request, response, 200, responseXML, params.type);
  }
};

const notFound = (request, response, params) => {
  if (params.type === 'application/json') {
    const responseJSON = {
      message: 'The page you are looking for was not found.',
      id: 'notFound',
    };

    respondJSON(request, response, 404, responseJSON, params.type);
  } else if (params.type === 'text/xml') {
    const responseXML = 'The page you are looking for was not found.,notFound';

    respondJSON(request, response, 404, responseXML, params.type);
  }
};

const badRequest = (request, response, params) => {
  if (params.type === 'application/json') {
    const responseJSON = {
      message: 'Missing valid query parameter set to true',
      id: 'badRequest',
    };

    respondJSON(request, response, 400, responseJSON, params.type);
  } else if (params.type === 'text/xml') {
    const responseXML = 'Missing valid query parameter set to true,badRequest';

    respondJSON(request, response, 400, responseXML, params.type);
  }
};

const unauthorized = (request, response, params) => {
  if (params.type === 'application/json') {
    const responseJSON = {
      message: 'Missing loggedIn query parameter set to yes',
      id: 'unauthorized',
    };

    respondJSON(request, response, 401, responseJSON, params.type);
  } else if (params.type === 'text/xml') {
    const responseXML = 'Missing loggedIn query parameter set to yes,unauthorized';

    respondJSON(request, response, 401, responseXML, params.type);
  }
};

const forbidden = (request, response, params) => {
  if (params.type === 'application/json') {
    const responseJSON = {
      message: 'You do not have access to this content.',
      id: 'forbidden',
    };

    respondJSON(request, response, 403, responseJSON, params.type);
  } else if (params.type === 'text/xml') {
    const responseXML = 'You do not have access to this content.,forbidden';

    respondJSON(request, response, 403, responseXML, params.type);
  }
};

const internal = (request, response, params) => {
  if (params.type === 'application/json') {
    const responseJSON = {
      message: 'Internal Server Error. Something went wrong.',
      id: 'internalError',
    };

    respondJSON(request, response, 500, responseJSON, params.type);
  } else if (params.type === 'text/xml') {
    const responseXML = 'Internal Server Error. Something went wrong.,internalError';

    respondJSON(request, response, 500, responseXML, params.type);
  }
};

const notImplemented = (request, response, params) => {
  if (params.type === 'application/json') {
    const responseJSON = {
      message: 'A get request for this page has not been implemented yet. Check agian later for updated content.',
      id: 'notImplemented',
    };

    respondJSON(request, response, 501, responseJSON);
  } else if (params.type === 'text/xml') {
    const responseXML = 'A get request for this page has not been implemented yet. Check agian later for updated content.,notImplemented';

    respondJSON(request, response, 501, responseXML, params.type);
  }
};


module.exports = {
  success,
  notFound,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
};
