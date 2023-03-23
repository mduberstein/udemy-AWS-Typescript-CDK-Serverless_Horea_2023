import * as cdk from 'aws-cdk-lib'
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotoStack extends cdk.Stack {
    /**
     *
     */
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new Bucket(this, 'PhotosBucket', {
            bucketName: 'photosbucket-234md34'
        });
        
    }

}