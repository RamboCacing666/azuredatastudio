/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class DuskyObjectModelsScaleSpec {
    'replicas'?: number | null;
    'shards'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        },
        {
            "name": "shards",
            "baseName": "shards",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DuskyObjectModelsScaleSpec.attributeTypeMap;
    }
}

