package com.syrian020.dross;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(LoopScreenPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
