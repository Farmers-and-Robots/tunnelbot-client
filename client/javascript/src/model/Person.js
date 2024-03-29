/**
 * Tunnelbot - OpenAPI 3.0
 * This is the API specification for the tunnelbot backend.
 *
 * The version of the OpenAPI document: 1
 * Contact: info@farmersandrobots.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FarmAssociation from './FarmAssociation';

/**
 * The Person model module.
 * @module model/Person
 * @version 1
 */
class Person {
    /**
     * Constructs a new <code>Person</code>.
     * @alias module:model/Person
     */
    constructor() { 
        
        Person.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Person</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Person} obj Optional instance to populate.
     * @return {module:model/Person} The populated <code>Person</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Person();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('farmAssociations')) {
                obj['farmAssociations'] = ApiClient.convertToType(data['farmAssociations'], [FarmAssociation]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Person</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Person</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        if (data['farmAssociations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['farmAssociations'])) {
                throw new Error("Expected the field `farmAssociations` to be an array in the JSON data but got " + data['farmAssociations']);
            }
            // validate the optional field `farmAssociations` (array)
            for (const item of data['farmAssociations']) {
                FarmAssociation.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Person.prototype['id'] = undefined;

/**
 * @member {String} kind
 */
Person.prototype['kind'] = undefined;

/**
 * @member {String} displayName
 */
Person.prototype['displayName'] = undefined;

/**
 * @member {String} firstName
 */
Person.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
Person.prototype['lastName'] = undefined;

/**
 * @member {String} email
 */
Person.prototype['email'] = undefined;

/**
 * @member {String} phone
 */
Person.prototype['phone'] = undefined;

/**
 * @member {Array.<module:model/FarmAssociation>} farmAssociations
 */
Person.prototype['farmAssociations'] = undefined;






export default Person;

